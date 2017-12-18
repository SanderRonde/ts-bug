class A {
	static readonly B = class B {
		static func2(): Promise<void> {
			return new Promise((resolve) => { resolve(null); });
		}
		static readonly C = class C {
			static async func() {
				await B.func2();
			}
		}	
	}
}

A.B.C.func();