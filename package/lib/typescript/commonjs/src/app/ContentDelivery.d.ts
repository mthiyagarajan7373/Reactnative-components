type ContentDeliveryResponse = {
    status: boolean;
    message: string;
    data: any;
};
/**
 * Fetches content delivery data, handling network and state errors.
 * @returns {Promise<ContentDeliveryResponse>} Response object with status, message, and data.
 */
export declare const contentDelivery: () => Promise<ContentDeliveryResponse>;
export {};
//# sourceMappingURL=ContentDelivery.d.ts.map