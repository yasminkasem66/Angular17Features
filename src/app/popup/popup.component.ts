import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { popupAnimation } from '../../shared/animations/popAnimation';
 
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations:[popupAnimation]
})
export class PopupComponent {
   openPopup=false;
}
