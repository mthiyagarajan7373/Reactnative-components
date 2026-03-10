type SetClientResponse = {
    status: boolean;
    message: string;
    data: any;
};
export declare const UseSetClientKey: () => {
    setClient: (appKey: string, pushNotificationToken: string, additionalData: any) => Promise<SetClientResponse>;
};
export {};
//# sourceMappingURL=SetAppKey.d.ts.map