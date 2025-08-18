import { useState, useCallback, useEffect } from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Upload, Image, Trash2, Eye, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import Navbar from "@/components/Navbar";

interface CloudinaryImage {
  id: string;
  public_id: string;
  secure_url: string;
  format: string;
  bytes: number;
  created_at: string;
  original_filename: string;
}

const Admin = () => {
  const { user } = useUser();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(false);

  // Check if user is admin (you can customize this logic)
  const isAdmin =
    user?.emailAddresses[0]?.emailAddress === "admin@example.com" ||
    user?.publicMetadata?.role === "admin";

  const uploadToCloudinary = useCallback(async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/diwkfbsgv/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      throw error;
    }
  }, []);

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      setUploading(true);

      try {
        for (const file of Array.from(files)) {
          const cloudinaryResult = await uploadToCloudinary(file);

          // Save metadata to Firebase
          await addDoc(collection(db, "media"), {
            public_id: cloudinaryResult.public_id,
            secure_url: cloudinaryResult.secure_url,
            format: cloudinaryResult.format,
            bytes: cloudinaryResult.bytes,
            created_at: cloudinaryResult.created_at,
            original_filename: cloudinaryResult.original_filename || file.name,
            uploaded_by: user?.id,
            uploaded_at: new Date().toISOString(),
          });
        }

        toast.success(`Successfully uploaded ${files.length} file(s)`);
        await fetchImages();
      } catch (error) {
        console.error("Upload error:", error);
        toast.error(
          "Upload failed. Please check your Cloudinary configuration.",
        );
      } finally {
        setUploading(false);
        // Reset input
        event.target.value = "";
      }
    },
    [uploadToCloudinary, user?.id],
  );

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "media"));
      const imageList: CloudinaryImage[] = [];

      querySnapshot.forEach((doc) => {
        imageList.push({
          id: doc.id,
          ...doc.data(),
        } as CloudinaryImage);
      });

      setImages(
        imageList.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
      );
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Failed to load images");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteImage = useCallback(async (imageId: string, publicId: string) => {
    try {
      // Delete from Firebase
      await deleteDoc(doc(db, "media", imageId));

      // Note: To delete from Cloudinary, you'd need a backend endpoint
      // as it requires admin API key which shouldn't be exposed in frontend

      setImages((prev) => prev.filter((img) => img.id !== imageId));
      toast.success("Image deleted from database");
      toast.info(
        "Note: Image still exists in Cloudinary. Use backend API to delete completely.",
      );
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete image");
    }
  }, []);

  const copyUrl = useCallback((url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }, []);

  // Load images on component mount
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        {!isAdmin ? (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-md rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <CardTitle className="text-center">Access Denied</CardTitle>
                <CardDescription className="text-center">
                  You don't have admin privileges to access this page.
                  <br />
                  <span className="text-xs mt-2 block">
                    Current email: {user?.emailAddresses[0]?.emailAddress}
                  </span>
                </CardDescription>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen w-full bg-background p-gap-xxl">
            <div className="w-full">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-foreground-muted">
                  Manage media assets and content for your website
                </p>
                <p className="text-sm text-foreground-more-muted mt-2">
                  Logged in as: {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>

              {/* Setup Instructions */}
              {/*<Card className="mb-8 border-warning/20 bg-warning/5">
                <CardHeader>
                  <CardTitle className="text-warning">
                    ⚠️ Setup Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">
                    To enable Cloudinary uploads, you need to:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-foreground-muted">
                    <li>
                      Create a Cloudinary account at{" "}
                      <a
                        href="https://cloudinary.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        cloudinary.com
                      </a>
                    </li>
                    <li>
                      Set up an upload preset in your Cloudinary dashboard
                    </li>
                    <li>
                      Replace "your_cloud_name" and "your_upload_preset" in the
                      code with your actual values
                    </li>
                    <li>
                      Update the admin email check in the code or set
                      role="admin" in Clerk user metadata
                    </li>
                  </ol>
                </CardContent>
              </Card>*/}

              <div className="flex gap-gap-md">
                <div className="flex flex-col gap-gap-md flex-grow">
                  {/* Upload Section */}
                  <div className="glass-panel rounded-3xl w-full border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Upload Media
                      </CardTitle>
                      <CardDescription>
                        Upload images to Cloudinary and store metadata in
                        Firebase
                      </CardDescription>
                    </div>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Input
                            id="file-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            disabled={uploading}
                            className="cursor-pointer border-none rounded-full"
                          />
                        </div>
                        {uploading && (
                          <div className="flex items-center gap-2 text-sm text-foreground-muted">
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            Uploading... Please wait.
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Media Gallery */}
                  <div className="glass-panel rounded-3xl w-full border bg-card text-card-foreground shadow-sm">
                    <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center flex-grow gap-2">
                          <Image className="h-5 w-5" />
                          Media ({images.length})
                        </CardTitle>
                        <CardDescription>
                          View and manage images
                        </CardDescription>
                      </div>
                      <Button
                        onClick={fetchImages}
                        disabled={loading}
                        variant="default"
                        className="w-[10%]"
                      >
                        <RefreshCw
                          className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`}
                        />
                        {loading ? "Loading..." : "Refresh"}
                      </Button>
                    </div>
                    <CardContent>
                      {images.length === 0 ? (
                        <div className="text-center py-12 text-foreground-muted">
                          <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No media uploaded yet.</p>
                          <p className="text-sm mt-2">
                            Upload some media to get started.
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {images.map((image) => (
                            <div
                              key={image.id}
                              className="bg-background-muted rounded-lg overflow-hidden border"
                            >
                              <div className="aspect-square relative">
                                <img
                                  src={image.secure_url}
                                  alt={image.original_filename}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-4 space-y-3">
                                <div>
                                  <h3
                                    className="font-medium text-sm truncate"
                                    title={image.original_filename}
                                  >
                                    {image.original_filename}
                                  </h3>
                                  <p className="text-xs text-foreground-muted">
                                    {(image.bytes / 1024 / 1024).toFixed(2)} MB
                                    • {image.format.toUpperCase()}
                                  </p>
                                  <p className="text-xs text-foreground-more-muted">
                                    {new Date(
                                      image.created_at,
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyUrl(image.secure_url)}
                                    className="flex-1"
                                    title="Copy image URL"
                                  >
                                    <Download className="h-3 w-3 mr-1" />
                                    Copy URL
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() =>
                                      window.open(image.secure_url, "_blank")
                                    }
                                    title="View full size"
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() =>
                                      deleteImage(image.id, image.public_id)
                                    }
                                    title="Delete from database"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>

                {/* Film List */}
                <div className="glass-panel rounded-3xl w-full max-w-md border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      List Of Films
                    </CardTitle>
                    <CardDescription>
                      Upload images to Cloudinary and store metadata in Firebase
                    </CardDescription>
                  </div>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Input
                          id="file-upload"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileUpload}
                          disabled={uploading}
                          className="cursor-pointer border-none rounded-full"
                        />
                      </div>
                      {uploading && (
                        <div className="flex items-center gap-2 text-sm text-foreground-muted">
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Uploading... Please wait.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </div>
        )}
      </SignedIn>
    </div>
  );
};

export default Admin;
