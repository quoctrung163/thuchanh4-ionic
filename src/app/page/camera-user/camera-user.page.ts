import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService, Photo } from '../../services/photo.service';

@Component({
  selector: 'app-camera-user',
  templateUrl: './camera-user.page.html',
  styleUrls: ['./camera-user.page.scss'],
})
export class CameraUserPage implements OnInit {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) { }
  ngOnInit() {
  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }
}
