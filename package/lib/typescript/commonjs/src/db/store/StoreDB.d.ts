type StoreResponse = {
    status: boolean;
    msg: string;
};
/**
 * Stores location data into the database.
 * @param location The location data to be saved.
 * @returns {Promise<string>} A string message indicating success or failure.
 */
export declare const storeLocationInDB: (location: string) => Promise<StoreResponse>;
export declare const storeContentDeliveryInDB: (content_delivery: string) => Promise<StoreResponse>;
export {};
//# sourceMappingURL=StoreDB.d.ts.map