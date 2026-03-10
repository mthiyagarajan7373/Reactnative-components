type SetLocationResponse = {
    status: boolean;
    message: string;
    data: any | null;
};
/**
 * Checks and requests location permissions using Expo Location.
 * @returns {Promise<string>} The status of the location permission (e.g., "granted", "denied", "undetermined").
 */
export declare const checkLocation: () => Promise<string>;
/**
 * Gets the user's current location.
 *
 * This function ensures the location permission is granted.
 * If permission is not granted, it throws an error.
 * When granted, it fetches and returns the user's current location.
 *
 * @returns {Promise<Location.LocationObject>} The user's current location (latitude and longitude).
 */
export declare const getLocation: () => Promise<SetLocationResponse>;
export {};
//# sourceMappingURL=Location.d.ts.map