type ReachResponse = {
    status: boolean;
    message: string;
};
/**
 * Track user opening the app.
 */
export declare const trackAppOpen: (actionType: string, requestType: string) => Promise<ReachResponse>;
export {};
//# sourceMappingURL=Reach.d.ts.map