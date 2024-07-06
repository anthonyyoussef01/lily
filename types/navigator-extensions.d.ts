// navigator-extensions.d.ts
declare global {
    interface Navigator {
        userAgentData?: NavigatorUAData;
    }

    interface NavigatorUAData {
        brands: readonly NavigatorBrandedUI[];
        mobile: boolean;
        platform: string;
    }

    interface NavigatorBrandedUI {
        brand: string;
        version: string;
    }
}

// This line is necessary if the file is a module to include global declarations
export {};