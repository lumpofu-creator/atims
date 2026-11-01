import {
  AssetService
} from "./chunk-DJORPUJV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-74YMUZCQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-2VERUPVP.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ALNKFEZR.js";

// src/app/features/assets/assets.component.ts
function AssetsComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 10);
    \u0275\u0275text(15, " D\xE9tails ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r1.stateId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + asset_r1.currentStatus.toLowerCase().replace("\xE9", "e"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r1.currentStatus, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 9, asset_r1.currentValue, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275interpolate1("/assets/", asset_r1.id));
  }
}
var AssetsComponent = class _AssetsComponent {
  constructor(assetService) {
    this.assetService = assetService;
    this.assets = [];
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadAssets();
  }
  loadAssets() {
    this.assetService.getAll().subscribe((assets) => {
      this.assets = assets;
    });
  }
  onSearch() {
    if (this.searchTerm) {
      this.assetService.search(this.searchTerm).subscribe((assets) => {
        this.assets = assets;
      });
    } else {
      this.loadAssets();
    }
  }
  static {
    this.\u0275fac = function AssetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetsComponent)(\u0275\u0275directiveInject(AssetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetsComponent, selectors: [["app-assets"]], decls: 27, vars: 2, consts: [[1, "container"], [1, "mb-3"], ["type", "text", "placeholder", "Rechercher un actif...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["routerLink", "/assets/new", 1, "btn", "btn-primary", "mt-3"], [1, "status-badge"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"]], template: function AssetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Gestion des Actifs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "input", 2);
        \u0275\u0275controlCreate();
        \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AssetsComponent_Template_input_ngModelChange_4_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
        \u0275\u0275text(12, "ID \xC9tat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Nom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Valeur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275template(24, AssetsComponent_tr_24_Template, 16, 14, "tr", 7);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "button", 8);
        \u0275\u0275text(26, " Nouvel Actif ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275control();
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.assets);
      }
    }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, CurrencyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsComponent, [{
    type: Component,
    args: [{
      selector: "app-assets",
      imports: [CommonModule, FormsModule, RouterModule],
      template: `
    <div class="container">
      <h1>Gestion des Actifs</h1>
      
      <!-- Search -->
      <div class="mb-3">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Rechercher un actif..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearch()"
        />
      </div>
      
      <!-- Asset List -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>ID \xC9tat</th>
                  <th>Nom</th>
                  <th>Cat\xE9gorie</th>
                  <th>Statut</th>
                  <th>Valeur</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let asset of assets">
                  <td>{{ asset.stateId }}</td>
                  <td>{{ asset.name }}</td>
                  <td>{{ asset.category }}</td>
                  <td>
                    <span class="status-badge" [class]="'status-' + asset.currentStatus.toLowerCase().replace('\xE9', 'e')">
                      {{ asset.currentStatus }}
                    </span>
                  </td>
                  <td>{{ asset.currentValue | currency:'EUR':'symbol':'1.0-0' }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary" routerLink="/assets/{{ asset.id }}">
                      D\xE9tails
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <!-- Add Asset Button -->
      <button class="btn btn-primary mt-3" routerLink="/assets/new">
        Nouvel Actif
      </button>
    </div>
  `
    }]
  }], () => [{ type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetsComponent, { className: "AssetsComponent", filePath: "src/app/features/assets/assets.component.ts", lineNumber: 70 });
})();
export {
  AssetsComponent
};
//# debugId=7114d9ef-e4b6-543a-8dbb-023ef465b667
//# sourceMappingURL=chunk-W7DQTUEY.js.map
