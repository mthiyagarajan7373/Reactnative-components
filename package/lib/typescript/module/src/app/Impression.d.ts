type ReachResponse = {
    status: boolean;
    message: string;
    data: any;
};
/**
 * Track user opening the app.
 */
export declare const trackRefresh: (actionType: string, requestType: string, campaignId: string, adId: string) => Promise<ReachResponse>;
export {};
//# sourceMappingURL=Impression.d.ts.map