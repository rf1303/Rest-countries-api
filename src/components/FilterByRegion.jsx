import { RegionsOptions } from './RegionDropDown.jsx'
import { useRegionsOptions } from './useRegionDropDown.js'
import { IconFilter } from '../../public/images/IconsSvg.jsx'

export const FilterByRegion = () => {
    const { 
        open, 
        isOpen, 
        toggle, 
        byRegion,
        buttonRef, 
        listboxId, 
        handleKeyDown, 
        regionRef 
    } = useRegionsOptions();
    
    return (
        <div ref={regionRef} className="relative">
            <button 
                ref={buttonRef} 
                id="region-trigger"
                type="button" 
                aria-haspopup="listbox"
                aria-controls={listboxId} 
                aria-expanded={open}
                aria-label={byRegion
                    ? `Region Selected ${byRegion}. Change region`
                    : "Filter by Region"}
                onClick={toggle}
                onKeyDown={handleKeyDown}
                className="text-preset-6 text-white md:text-preset-5 max-w-50 bg-blue-900 rounded-lg py-1 px-5 cursor-pointer flex items-center gap-4 light:bg-blue-250 light:text-grey-950"
            >
                <span className="w-full">{byRegion ?? "Filter by Region"}</span>
                <IconFilter open={isOpen} />
            </button>
            <RegionsOptions />
        </div>
    );
}
