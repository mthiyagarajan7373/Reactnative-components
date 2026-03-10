type RetrieveResponse = {
    status: boolean;
    message: string;
    data: any;
};
/**
 * Retrieves location data from the local database.
 * @returns {Promise<any[] | null>} The location data or null if no data is found or an error occurs.
 */
export declare const getLocationInDB: () => Promise<RetrieveResponse>;
export declare const getLastLocationInDB: () => Promise<RetrieveResponse>;
export declare const getContentDeliveryInDB: () => Promise<RetrieveResponse>;
export {};
//# sourceMappingURL=RetrieveDB.d.ts.map