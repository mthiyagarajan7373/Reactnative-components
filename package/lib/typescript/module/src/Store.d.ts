import { type AuthState } from './redux/AuthRedux';
import { type LocationState } from './redux/LocationRedux';
import { type ContentDeliveryState } from './redux/ContentDeliveryRedux';
import { type ReachState } from './redux/ReachRedux';
export interface RootState {
    authorization: AuthState;
    location: LocationState;
    contentDelivery: ContentDeliveryState;
    reach: ReachState;
}
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    auth: AuthState;
    location: LocationState;
    contentDelivery: ContentDeliveryState;
    reach: ReachState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        auth: AuthState;
        location: LocationState;
        contentDelivery: ContentDeliveryState;
        reach: ReachState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
//# sourceMappingURL=Store.d.ts.map