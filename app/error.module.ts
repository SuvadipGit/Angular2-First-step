import{ErrorHandler} from "@angular/core";
import{NgModule} from "@angular/core";
export class MyErrorHandler implements ErrorHandler {

    call(error: any, stackTrace: any = null, reason: any = null) {
        // do something with the exception
        console.log("do something with the exception");
    }

    // I handle the given error.
    public handleError( error: any ): void {
        console.log(error);
        console.log("App had handled the given error");
        alert("Exception Handled : " + error);
    }

}
@NgModule({
    providers: [
        {
            provide: ErrorHandler,
            useClass: MyErrorHandler
        }
     ]
})
export class MyErrorModule {}