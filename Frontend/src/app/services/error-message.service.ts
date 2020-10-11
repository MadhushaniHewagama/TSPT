import { Injectable } from '@angular/core';
// import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

//   constructor(public toastController: ToastController) { }

//   async showMessage(head: string, msg: string, clr: string = 'dark') {
//     const toast = await this.toastController.create({
//       header: head,
//       message: msg,
//       color: clr,
//       // showCloseButton: true,
//       // closeButtonText: 'X',
//       duration: 3000,
//       position: 'bottom'
//     });
//     await toast.present();
//   }

//   showServerError(errStatus, header= 'Action Failed') {
//     if (errStatus === 0) {
//       this.showMessage(
//         header,
//         'Please make sure you are connected to the internet and try again',
//         'danger'
//       );
//     } else if (errStatus === 500) {
//       this.showMessage(
//         header,
//         'Internal Server Error! Please try again later.',
//         'danger'
//       );
//     } else {
//       this.showMessage(
//         header,
//         'Something went wrong! Please try again. (' + errStatus + ')',
//         'danger'
//       );
//     }
//   }
}
