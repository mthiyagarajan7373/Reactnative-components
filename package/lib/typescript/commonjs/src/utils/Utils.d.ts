export declare const getDeviceID: () => Promise<string>;
export declare const getDeviceType: () => Promise<"PHONE" | "TABLET" | "TV" | "DESKTOP">;
export declare const getDeviceOs: () => string;
export declare const getAdID: () => string;
export declare const UseVisibility: () => {
    onAdsLayout: (event: any) => Promise<void>;
    onImpressionScroll: (event: any) => Promise<void>;
};
export declare const isVideo: (url: string) => boolean;
//# sourceMappingURL=Utils.d.ts.map