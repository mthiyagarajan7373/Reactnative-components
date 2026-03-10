type FontWeight = 'normal' | 'bold' | 'medium';
type Response = {
    status: boolean;
    message: string;
    data: any;
};
interface AdProps {
    videoHeight?: number;
    imageHeight?: number;
    adLayoutBackgroundColor?: string;
    titleTextColor?: string;
    descriptionTextColor?: string;
    footerTextColor?: string;
    buttonTextColor?: string;
    titleTextSize?: number;
    descriptionTextSize?: number;
    footerTextSize?: number;
    buttonTextSize?: number;
    buttonBackgroundColor?: string;
    buttonBorderRadius?: number;
    titleFontWeight?: FontWeight;
    descriptionFontWeight?: FontWeight;
    footerFontWeight?: FontWeight;
    buttonFontWeight?: FontWeight;
}
/**
 * Sets the fcm token.
 */
export declare const sendFcmToken: (fcmToken: string) => Promise<object>;
/**
 * Sets the client key and license key.
 */
export declare const setClientKey: (baseUrl: string, appKey: string, pushNotificationToken: string, additionalData: any) => Promise<object>;
/**
 * Validates the client and initializes the database.
 */
export declare const initializeDatabase: () => Promise<object>;
/**
 * Requests location permissions.
 */
export declare const checkLocationPermission: () => Promise<object>;
/**
 * Gets the user's current location.
 */
export declare const getCurrentLocation: (storeInDB?: boolean) => Promise<object>;
/**
 * Retrieves all location from the database.
 */
export declare const fetchAllLocationFromDB: () => Promise<object>;
/**
 * Retrieves current location from the database.
 */
export declare const fetchCurrentLocationFromDB: () => Promise<object>;
/**
 * Delete a table in the database.
 */
export declare const deleteTableInLocalDB: (tableName: string) => Promise<object>;
/**
 * Get the content delivery data.
 */
export declare const getContentDelivery: (storeInDB?: boolean) => Promise<Response>;
/**
 * Retrieves content delivery from the database.
 */
export declare const getContentDeliveryInLocalDB: () => Promise<object>;
/**
 * Track user opening the app.
 */
export declare const sendReach: (actionType: string, requestType: string) => Promise<object>;
export declare const sendImpression: (actionType: string | undefined, requestType: string | undefined, campaignId: string, adId: string) => Promise<Response>;
export declare const PixelScrollHandler: ({ event }: any) => null;
/**
 * Display Ad user interface
 */
export declare const DisplayAds: (props: AdProps) => JSX.Element;
/**
 * Horizontal Ad user interface
 */
export declare const HorizontalAds: (props: AdProps) => JSX.Element;
/**
 * Vertical Ad user interface
 */
export declare const VerticalAds: (props: AdProps) => JSX.Element;
/**
 * Lead Ad user interface
 */
export declare const LeadAds: (props: AdProps) => JSX.Element;
/**
 * Produc Ad user interface
 */
export declare const ProductAds: (props: AdProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map