import Swal from 'sweetalert2/dist/sweetalert2';
import { FireAction, SwalParams } from '../interfaces/swal.interface';

class SwalAlert {

  fire(data: SwalParams): FireAction {
    return Swal.fire({ ...data });
  }

}

export const swal = new SwalAlert();
