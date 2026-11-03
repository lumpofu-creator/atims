import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-E6HDRDLF.js";

// src/app/features/assets/asset.service.ts
var AssetService = class _AssetService {
  http;
  apiUrl = `${environment.apiBase}`;
  apiUrlAssets = `${environment.apiBase}/assets`;
  constructor(http) {
    this.http = http;
  }
  getAll(page = 1, limit = 10, searchTerm = "") {
    let params = new HttpParams().set("page", page).set("limit", limit);
    if (searchTerm)
      params = params.set("search", searchTerm);
    return this.http.get(this.apiUrlAssets, { params }).pipe(map((response) => ({
      items: Array.isArray(response?.data?.items) ? response.data.items.map((asset) => this.mapAsset(asset)) : [],
      total: Number(response?.data?.pagination?.total ?? 0)
    })));
  }
  getById(id) {
    return this.http.get(`${this.apiUrlAssets}/${id}`).pipe(map((response) => this.mapAsset(response.data)));
  }
  create(asset) {
    const payload = {
      state_id: asset.stateId || void 0,
      name: asset.name,
      description: asset.description,
      category_id: asset.categoryId,
      current_status: asset.currentStatus,
      current_value: asset.currentValue,
      purchase_value: asset.purchaseValue,
      registered_location: asset.registeredLocation,
      acquisition_date: asset.acquisitionDate,
      latitude: asset.latitude,
      longitude: asset.longitude,
      parent_asset_id: asset.parentAssetId
    };
    return this.http.post(this.apiUrlAssets, payload).pipe(map((response) => response.id));
  }
  update(id, asset) {
    const payload = {
      name: asset.name,
      description: asset.description,
      category_id: asset.categoryId,
      current_status: asset.currentStatus,
      current_value: asset.currentValue,
      registered_location: asset.registeredLocation,
      acquisition_date: asset.acquisitionDate,
      latitude: asset.latitude,
      longitude: asset.longitude,
      parent_asset_id: asset.parentAssetId
    };
    return this.http.put(`${this.apiUrlAssets}/${id}`, payload).pipe(map(() => void 0));
  }
  delete(id) {
    return this.http.delete(`${this.apiUrlAssets}/${id}`).pipe(map(() => void 0));
  }
  getMapPins() {
    return this.http.get(`${this.apiUrl}/dashboards/map-pins`).pipe(map((response) => Array.isArray(response?.data) ? response.data.map((pin) => ({
      assetId: pin.asset_id,
      name: pin.name,
      status: pin.status,
      latitude: Number(pin.latitude),
      longitude: Number(pin.longitude)
    })) : []));
  }
  getRecentInspections() {
    return this.http.get(`${this.apiUrl}/inspections?limit=10&orderBy=created_at:desc`).pipe(map((response) => Array.isArray(response?.data?.items) ? response.data.items.map((inspection) => ({
      id: inspection.id,
      assetName: inspection.asset_name,
      inspectionType: inspection.inspection_type,
      conditionStatus: inspection.condition_status,
      date: inspection.created_at
    })) : []));
  }
  mapAsset(asset) {
    const status = asset.current_status;
    const latitude = asset.latitude === null ? null : Number(asset.latitude);
    const longitude = asset.longitude === null ? null : Number(asset.longitude);
    return {
      id: asset.id,
      stateId: asset.state_id,
      name: asset.name,
      description: asset.description,
      category: asset.category_name,
      categoryId: asset.category_id,
      registeredLocation: asset.registered_location ?? null,
      acquisitionDate: asset.acquisition_date ?? null,
      purchaseValue: asset.purchase_value == null ? null : Number(asset.purchase_value),
      parentAssetId: asset.parent_asset_id ?? null,
      latitude,
      longitude,
      locationText: latitude === null || longitude === null ? "" : `${latitude}, ${longitude}`,
      currentStatus: status in { "Fonctionnel": true, "En Panne": true, "D\xE9class\xE9": true, "Inconnu": true } ? status : "Inconnu",
      currentValue: Number(asset.current_value)
    };
  }
  static \u0275fac = function AssetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetService, factory: _AssetService.\u0275fac, providedIn: "root" });
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
//# sourceMappingURL=chunk-GCS3E7BL.js.map
