import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface FilterState {
  search: string;
  category: string;
  yearRange: [number, number];
  runtimeRange: [number, number];
}

interface FilmSearchAndFilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  categories: string[];
}

const FilmSearchAndFilter = ({ filters, onFiltersChange, categories }: FilmSearchAndFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: "",
      yearRange: [2010, 2024],
      runtimeRange: [0, 30],
    });
  };

  const hasActiveFilters = filters.category || filters.yearRange[0] > 2010 || filters.yearRange[1] < 2024 || filters.runtimeRange[0] > 0 || filters.runtimeRange[1] < 30;

  return (
    <div className="space-y-gap-sm">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted w-4 h-4" />
        <Input
          placeholder="Search films..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-gap-sm">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full w-2 h-2"></span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Films</SheetTitle>
            </SheetHeader>
            
            <div className="space-y-gap-lg mt-gap-lg">
              {/* Category Filter */}
              <div className="space-y-gap-xs">
                <label className="text-sm font-medium">Category</label>
                <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Year Range Filter */}
              <div className="space-y-gap-xs">
                <label className="text-sm font-medium">
                  Year Range: {filters.yearRange[0]} - {filters.yearRange[1]}
                </label>
                <Slider
                  value={filters.yearRange}
                  onValueChange={(value) => updateFilter("yearRange", value)}
                  min={2010}
                  max={2024}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Runtime Range Filter */}
              <div className="space-y-gap-xs">
                <label className="text-sm font-medium">
                  Runtime: {filters.runtimeRange[0]}min - {filters.runtimeRange[1]}min
                </label>
                <Slider
                  value={filters.runtimeRange}
                  onValueChange={(value) => updateFilter("runtimeRange", value)}
                  min={0}
                  max={30}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="flex items-center gap-gap-xs text-sm text-foreground-muted">
            <span>Active filters:</span>
            {filters.category && (
              <span className="bg-background-muted px-2 py-1 rounded text-xs">
                {filters.category}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmSearchAndFilter;