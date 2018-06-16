import { RouterStateSerializer } from "@ngrx/router-store"
import { RouterStateSnapshot, Params } from "@angular/router"

export interface RouterStateUrl {
    url: string
    params: Params
    queryParams: Params
}

export class SerializedRouterState implements RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root

        while (route.firstChild) route = route.firstChild

        return {
            url: routerState.url,
            params: route.params,
            queryParams: routerState.root.queryParams
        }
    }
}