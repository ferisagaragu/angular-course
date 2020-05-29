import Swal from 'sweetalert2/dist/sweetalert2';
import { SwalParams } from '../interfaces/swal.interface';

class SwalAlert {

  fire(data: SwalParams) {
    Swal.fire({ ...data });
  }

}

export const swal = new SwalAlert();