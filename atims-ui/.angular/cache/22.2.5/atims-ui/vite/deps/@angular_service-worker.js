import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-CWmPus4P.js";
import { Ac as InjectionToken, Di as provideAppInitializer, Fl as ɵɵinject, Fn as Injectable, Ml as ɵɵdefineInjector, Wi as setClassMetadata, ao as ɵɵdefineNgModule, fl as inject, jc as Injector, jl as ɵɵdefineInjectable, ol as formatRuntimeError, qc as RuntimeError, qn as NgModule, tn as ApplicationRef, vl as makeEnvironmentProviders, zc as NgZone } from "./core-DX7Q1bzr.js";
import { Et as take, Qt as filter, Wn as Subject, Yn as Observable, fn as map, x as switchMap } from "./zipWith-3O6QFimT.js";
import { a as NEVER } from "./esm5-mutFUw8P.js";
// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
* @license Angular v22.2.4
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _SwPush;
var _SwUpdate;
var _ServiceWorkerModule;
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
	constructor(serviceWorker, injector) {
		_defineProperty(this, "serviceWorker", void 0);
		_defineProperty(this, "worker", void 0);
		_defineProperty(this, "registration", void 0);
		_defineProperty(this, "events", void 0);
		this.serviceWorker = serviceWorker;
		if (!serviceWorker) this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
		else {
			let currentWorker = null;
			const workerSubject = new Subject();
			this.worker = new Observable((subscriber) => {
				if (currentWorker !== null) subscriber.next(currentWorker);
				return workerSubject.subscribe((v) => subscriber.next(v));
			});
			const updateController = () => {
				const { controller } = serviceWorker;
				if (controller === null) return;
				currentWorker = controller;
				workerSubject.next(currentWorker);
			};
			serviceWorker.addEventListener("controllerchange", updateController);
			updateController();
			this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
				if (!registration) throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
				return registration;
			})));
			const _events = new Subject();
			this.events = _events.asObservable();
			const messageListener = (event) => {
				const { data } = event;
				if (data === null || data === void 0 ? void 0 : data.type) _events.next(data);
			};
			serviceWorker.addEventListener("message", messageListener);
			const appRef = injector === null || injector === void 0 ? void 0 : injector.get(ApplicationRef, null, { optional: true });
			appRef === null || appRef === void 0 || appRef.onDestroy(() => {
				serviceWorker.removeEventListener("controllerchange", updateController);
				serviceWorker.removeEventListener("message", messageListener);
			});
		}
	}
	postMessage(action, payload) {
		return new Promise((resolve) => {
			this.worker.pipe(take(1)).subscribe((sw) => {
				sw.postMessage(_objectSpread2({ action }, payload));
				resolve();
			});
		});
	}
	postMessageWithOperation(type, payload, operationNonce) {
		const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
		const postMessage = this.postMessage(type, payload);
		return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
	}
	generateNonce() {
		return Math.round(Math.random() * 1e7);
	}
	eventsOfType(type) {
		let filterFn;
		if (typeof type === "string") filterFn = (event) => event.type === type;
		else filterFn = (event) => type.includes(event.type);
		return this.events.pipe(filter(filterFn));
	}
	nextEventOfType(type) {
		return this.eventsOfType(type).pipe(take(1));
	}
	waitForOperationCompleted(nonce) {
		return new Promise((resolve, reject) => {
			this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
				if (event.result !== void 0) return event.result;
				throw new Error(event.error);
			})).subscribe({
				next: resolve,
				error: reject
			});
		});
	}
	get isEnabled() {
		return !!this.serviceWorker;
	}
};
var SwPush = class {
	get isEnabled() {
		return this.sw.isEnabled;
	}
	constructor(sw) {
		_defineProperty(this, "sw", void 0);
		_defineProperty(this, "messages", void 0);
		_defineProperty(this, "notificationClicks", void 0);
		_defineProperty(this, "notificationCloses", void 0);
		_defineProperty(this, "pushSubscriptionChanges", void 0);
		_defineProperty(this, "subscription", void 0);
		_defineProperty(this, "pushManager", null);
		_defineProperty(this, "subscriptionChanges", new Subject());
		this.sw = sw;
		if (!sw.isEnabled) {
			this.messages = NEVER;
			this.notificationClicks = NEVER;
			this.notificationCloses = NEVER;
			this.pushSubscriptionChanges = NEVER;
			this.subscription = NEVER;
			return;
		}
		this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
		this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
		this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
		this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
		this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
		const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
		this.subscription = new Observable((subscriber) => {
			const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
			const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
			return () => {
				workerDrivenSubscription.unsubscribe();
				subscriptionChanges.unsubscribe();
			};
		});
	}
	requestSubscription(options) {
		if (!this.sw.isEnabled || this.pushManager === null) return Promise.reject(/* @__PURE__ */ new Error(ERR_SW_NOT_SUPPORTED));
		const pushOptions = { userVisibleOnly: true };
		let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
		let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
		for (let i = 0; i < key.length; i++) applicationServerKey[i] = key.charCodeAt(i);
		pushOptions.applicationServerKey = applicationServerKey;
		return new Promise((resolve, reject) => {
			this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
				next: (sub) => {
					this.subscriptionChanges.next(sub);
					resolve(sub);
				},
				error: reject
			});
		});
	}
	unsubscribe() {
		if (!this.sw.isEnabled) return Promise.reject(/* @__PURE__ */ new Error(ERR_SW_NOT_SUPPORTED));
		const doUnsubscribe = (sub) => {
			if (sub === null) throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
			return sub.unsubscribe().then((success) => {
				if (!success) throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
				this.subscriptionChanges.next(null);
			});
		};
		return new Promise((resolve, reject) => {
			this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
				next: resolve,
				error: reject
			});
		});
	}
	decodeBase64(input) {
		return atob(input);
	}
};
_SwPush = SwPush;
_defineProperty(SwPush, "ɵfac", function SwPush_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _SwPush)(ɵɵinject(NgswCommChannel));
});
_defineProperty(SwPush, "ɵprov", /*@__PURE__*/ ɵɵdefineInjectable({
	token: _SwPush,
	factory: _SwPush.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{ type: Injectable }], () => [{ type: NgswCommChannel }], null);
})();
var SwUpdate = class {
	get isEnabled() {
		return this.sw.isEnabled;
	}
	constructor(sw) {
		_defineProperty(this, "sw", void 0);
		_defineProperty(this, "versionUpdates", void 0);
		_defineProperty(this, "unrecoverable", void 0);
		_defineProperty(this, "ongoingCheckForUpdate", null);
		this.sw = sw;
		if (!sw.isEnabled) {
			this.versionUpdates = NEVER;
			this.unrecoverable = NEVER;
			return;
		}
		this.versionUpdates = this.sw.eventsOfType([
			"VERSION_DETECTED",
			"VERSION_INSTALLATION_FAILED",
			"VERSION_READY",
			"NO_NEW_VERSION_DETECTED"
		]);
		this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
	}
	checkForUpdate() {
		if (!this.sw.isEnabled) return Promise.reject(/* @__PURE__ */ new Error(ERR_SW_NOT_SUPPORTED));
		if (this.ongoingCheckForUpdate) return this.ongoingCheckForUpdate;
		const nonce = this.sw.generateNonce();
		this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", { nonce }, nonce).finally(() => {
			this.ongoingCheckForUpdate = null;
		});
		return this.ongoingCheckForUpdate;
	}
	activateUpdate() {
		if (!this.sw.isEnabled) return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
		const nonce = this.sw.generateNonce();
		return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", { nonce }, nonce);
	}
};
_SwUpdate = SwUpdate;
_defineProperty(SwUpdate, "ɵfac", function SwUpdate_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _SwUpdate)(ɵɵinject(NgswCommChannel));
});
_defineProperty(SwUpdate, "ɵprov", /*@__PURE__*/ ɵɵdefineInjectable({
	token: _SwUpdate,
	factory: _SwUpdate.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{ type: Injectable }], () => [{ type: NgswCommChannel }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
	const options = inject(SwRegistrationOptions);
	if (!("serviceWorker" in navigator && options.enabled !== false)) return;
	const script = inject(SCRIPT);
	const ngZone = inject(NgZone);
	const appRef = inject(ApplicationRef);
	ngZone.runOutsideAngular(() => {
		const sw = navigator.serviceWorker;
		const onControllerChange = () => {
			var _sw$controller;
			return (_sw$controller = sw.controller) === null || _sw$controller === void 0 ? void 0 : _sw$controller.postMessage({ action: "INITIALIZE" });
		};
		sw.addEventListener("controllerchange", onControllerChange);
		appRef.onDestroy(() => {
			sw.removeEventListener("controllerchange", onControllerChange);
		});
	});
	ngZone.runOutsideAngular(() => {
		let readyToRegister;
		const { registrationStrategy } = options;
		if (typeof registrationStrategy === "function") readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
		else {
			const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
			switch (strategy) {
				case "registerImmediately":
					readyToRegister = Promise.resolve();
					break;
				case "registerWithDelay":
					readyToRegister = delayWithTimeout(+args[0] || 0);
					break;
				case "registerWhenStable":
					readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
					break;
				default: throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
			}
		}
		readyToRegister.then(() => {
			if (appRef.destroyed) return;
			navigator.serviceWorker.register(script, {
				scope: options.scope,
				updateViaCache: options.updateViaCache,
				type: options.type
			}).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
		});
	});
}
function delayWithTimeout(timeout) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
	const opts = inject(SwRegistrationOptions);
	const injector = inject(Injector);
	return new NgswCommChannel(opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
	constructor() {
		_defineProperty(this, "enabled", void 0);
		_defineProperty(this, "updateViaCache", void 0);
		_defineProperty(this, "type", void 0);
		_defineProperty(this, "scope", void 0);
		_defineProperty(this, "registrationStrategy", void 0);
	}
};
function provideServiceWorker(script, options = {}) {
	return makeEnvironmentProviders([
		SwPush,
		SwUpdate,
		{
			provide: SCRIPT,
			useValue: script
		},
		{
			provide: SwRegistrationOptions,
			useValue: options
		},
		{
			provide: NgswCommChannel,
			useFactory: ngswCommChannelFactory
		},
		provideAppInitializer(ngswAppInitializer)
	]);
}
var ServiceWorkerModule = class ServiceWorkerModule {
	static register(script, options = {}) {
		return {
			ngModule: ServiceWorkerModule,
			providers: [provideServiceWorker(script, options)]
		};
	}
};
_ServiceWorkerModule = ServiceWorkerModule;
_defineProperty(ServiceWorkerModule, "ɵfac", function ServiceWorkerModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ServiceWorkerModule)();
});
_defineProperty(ServiceWorkerModule, "ɵmod", /*@__PURE__*/ ɵɵdefineNgModule({ type: _ServiceWorkerModule }));
_defineProperty(ServiceWorkerModule, "ɵinj", /*@__PURE__*/ ɵɵdefineInjector({ providers: [SwPush, SwUpdate] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
		type: NgModule,
		args: [{ providers: [SwPush, SwUpdate] }]
	}], null, null);
})();
export { ServiceWorkerModule, SwPush, SwRegistrationOptions, SwUpdate, provideServiceWorker };
