import {PatientPersonal} from './patient.personal.model';
import {PatientMedical} from './patient.medical.model';

export class Patient {
    patientId: string;
    personal: PatientPersonal;
    medical: PatientMedical;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
