import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const avatarDir  = `${imgDir}/avatar`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
    ir.addSvgIcon('heart', ds.bypassSecurityTrustResourceUrl('assets/heart.svg'));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl('assets/add.svg'));
    ir.addSvgIcon('red-heart', ds.bypassSecurityTrustResourceUrl('assets/red-heart.svg'));
    ir.addSvgIcon('black-heart', ds.bypassSecurityTrustResourceUrl('assets/black-heart.svg'));
    ir.addSvgIcon('black-add', ds.bypassSecurityTrustResourceUrl('assets/black-add.svg'));
    ir.addSvgIcon('download', ds.bypassSecurityTrustResourceUrl('assets/download.svg'));
    ir.addSvgIcon('close', ds.bypassSecurityTrustResourceUrl('assets/close.svg'));
};
