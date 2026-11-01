import {
  HttpClient,
  Injectable,
  environment,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ALNKFEZR.js";

// src/app/features/assets/asset.service.ts
var AssetService = class _AssetService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiBase}/assets`;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(asset) {
    return this.http.post(this.apiUrl, asset);
  }
  update(id, asset) {
    return this.http.put(`${this.apiUrl}/${id}`, asset);
  }
  getMapPins() {
    return this.http.get("/api/dashboards/map-pins").pipe(map((response) => Array.isArray(response?.data) ? response.data.map((pin) => ({
      assetId: pin.asset_id,
      name: pin.name,
      status: pin.status,
      latitude: Number(pin.latitude),
      longitude: Number(pin.longitude)
    })) : []));
  }
  getRecentInspections() {
    return this.http.get("/api/inspections?limit=10&orderBy=created_at:desc").pipe(map((response) => Array.isArray(response?.data?.items) ? response.data.items.map((inspection) => ({
      id: inspection.id,
      assetName: inspection.asset_name,
      inspectionType: inspection.inspection_type,
      conditionStatus: inspection.condition_status,
      date: inspection.created_at
    })) : []));
  }
  search(searchTerm) {
    return this.http.get(`${this.apiUrl}/search?q=${searchTerm}`);
  }
  static {
    this.\u0275fac = function AssetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetService, factory: _AssetService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AssetService
};
//# debugId=eda233f7-0017-5dbc-9bc7-8748790e77d7
//# sourceMappingURL=chunk-DJORPUJV.js.map
