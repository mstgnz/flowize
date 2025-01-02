/// <reference lib="dom" />

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export class HttpErrorInterCeptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError((response: HttpErrorResponse) => {
                let message = "Hata Oluştu!"

                if (!navigator.onLine) {
                    message = "internet bağlantınız yok";
                    return throwError(() => new Error(message));
                }

                if (response.error?.error) {
                    if (response.status == 401) {
                        message = "Yetkiniz Yok!";
                        return throwError(() => new Error(message));
                    }

                    switch (response.error.error.message) {
                        case "EMAIL_EXISTS":
                            message = "Email Adresi Zaten Kayıtlı!"
                            break;
                        case "EMAIL_NOT_FOUND":
                            message = "Email Adresi Bulunamadı!"
                            break;
                        case "INVALID_PASSWORD":
                            message = "Parolanız Yanlış!"
                            break;
                        case "USER_DISABLED":
                            message = "Kullanıcı Aktif Değil!"
                            break;
                        case "OPERATION_NOT_ALLOWED":
                            message = "Kullanıcı Girişi Kapalı!"
                            break;
                        case "TOO_MANY_ATTEMPTS_TRY_LATER":
                            message = "Bu Cihaz ile Girişler Kapatıldı!"
                            break;
                        default:
                            message = response.error.error.message
                            break;
                    }
                }
                return throwError(() => new Error(message));
            })
        )
    }
}