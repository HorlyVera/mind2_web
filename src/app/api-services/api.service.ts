import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { StorageService } from './storage.service';
import { lastValueFrom, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  onCardRegister: Subject<any> = new Subject<any>();
  imageVersion: number = 0;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
  }
 
  public async getSpecilaities() {
    var value = this.http.get(`/specialty`);
    return await lastValueFrom(value);
  }
  
  public async setTherapistDetail(detail: any) {
    this.storage.getCurrentUser().then(async user => {
      user.detail = detail
      this.storage.setCurrentUser(user)
    })
  }

  public async updateCurrentUser(usuario: any) {
    this.storage.getCurrentUser().then(async user => {
      user.name = usuario.name
      user.last_name = usuario.last_name
      await this.storage.setCurrentUser(user)
    })
  }

  public async getTherapistDetail(id: number) {
    var value = this.http.get(`/therapist-detail/${id}`);
    return await lastValueFrom(value);
  }
  //SERVICIO PARA OBTENER EL PERFIL DEL TERAPEUTA MEDIANTE EL ID
  public async getTherapistProfile(id: number){
    const opts = { params: new HttpParams({ fromString: "join=detail&join=detail.specialties" }) }
    var value = this.http.get(`/users/${id}`, opts);
    return await lastValueFrom(value);
    }
    

  public async getUsers(onlyAuth: boolean = false) {
    const params = new HttpParams()
      .set('join', 'role')
      .set('filter', 'role.name||$eq||patient')
      .set('or', 'role.name||$eq||therapist')
      .append('join', 'channels')
      .append('join', 'therapist')
      .append('filter', 'active||$eq||true')
    if (onlyAuth) params.append('filter', 'status||$eq||2')
    // Return users from http request get using lastValueFrom
    var value = this.http.get(`/users`, { params });
    return await lastValueFrom(value);  
  }
  
  //SERVICIO PARA OBTENER LOS PACIENTES DEL TERAPEUTA POR ID
  public async getMyPatients(id: number){
    // Return patients from http request get using lastValueFrom
    var value = this.http.get(`/users/my-patients/${id}`);
    return await lastValueFrom(value);

    
  }
  
  public async getTodayPatients(id: number) {
     // Return patients today from http request get using lastValueFrom
      var value = this.http.get(`//users/today-patients/${id}`);
      return await lastValueFrom(value);
  }

  public async getMyTherapist() {
    // Return my therapist from http request get using lastValueFrom
    var value = this.http.get(`/users/my-therapist`);
    return await lastValueFrom(value);
  }

  public async getTherapists() {
    let params = new HttpParams()
      .set('join', 'role')
      .set('filter', 'role.name||$eq||therapist')
      .append('join', 'detail')
      .append('join', 'detail.specialties')
      .append('filter', 'active||$eq||1')
      .append('filter', 'test||$eq||0')
      // Return therapists from http request get using lastValueFrom
    var value = this.http.get(`/users`, { params });
    return await lastValueFrom(value);
  }


  public async assignTherapist(patientId: number, therapistId: number) {
    var value = this.http.post(`/users/${patientId}/therapist`, { therapistId });
    return await lastValueFrom(value);
  }

  public async createAppointment(appointment: any) {
    var value = this.http.post('/appointments', appointment);
    return await lastValueFrom(value);
  }

  public async updateUser(userId: number, data: {}) {
    var value = this.http.patch(`/users/${userId}`, data);
    return await lastValueFrom(value);
  }

  public async updateTherapistDetail(detailId: number, data: {}) {
    var value = this.http.patch(`/therapist-detail/${detailId}`, data);
    return await lastValueFrom(value);
  }

  public async getPackages() {
    var value = this.http.get('/package');
    return await lastValueFrom(value);
  }

  public async createCard(card: any) {
    var value = this.http.post('/users/addCard', card);
    return await lastValueFrom(value);
  }

  public async removeCard(id: any) {
    var value = this.http.delete(`/users/delete-card/${id}`);
    return await lastValueFrom(value);
  }

  public getOnCardRegister(): Observable<any> {
    return this.onCardRegister.asObservable();
  }

  public setCardRegister(newCard: boolean) {
    this.onCardRegister.next({ newCard });
  }

  public async getCards() {
    var value = this.http.get('/users/cards');
    return await lastValueFrom(value);
  }

  public async payPlan(paymentData: {}) {
    var value = this.http.post('/payments', paymentData);
    return await lastValueFrom(value);
  }

  public async cancelPayment(id: number) {
    var value = this.http.delete(`/payments/${id}/cancel`);
    return await lastValueFrom(value);
  }

  public async createManySchedules(schedules: any[]) {
    var value = this.http.post('/schedules/bulk', schedules);
    return await lastValueFrom(value);
  }

  public async updateSchedule(scheduleId: number, schedule: any) {
    var value = this.http.patch(`/schedules/${scheduleId}`, schedule);
    return await lastValueFrom(value);
  }

  public async createSchedule(schedule: any) {
    var value = this.http.post('/schedules', schedule);
    return await lastValueFrom(value);
  }

  public async deleteSchedule(scheduleId: number) {
    var value = this.http.delete(`/schedules/${scheduleId}`);
    return await lastValueFrom(value);
  }

  public async getUserSchedules(user_id: number) {
    let params: HttpParams = new HttpParams()
      .set('join', 'therapists')
      .set('s', `{"status": 1, "therapists.id": {"$eq": ${user_id}}}`)
      var value = this.http.get('/schedules', { params });
    return await lastValueFrom(value);
  }

  public async uploadUserPhoto(id: number, photo: any) {
    this.imageVersion++;
    var value = this.http.post(`/users/${id}/photo`, photo);
    return await lastValueFrom(value);
  }

  public getBaseURL(): string {
    return environment.API_BASE_URL;
  }

  public async getPhotoProfile(user: any, isCurrentUser: boolean = false) {
    if(isCurrentUser){
      if(user.role.name == 'support') {
        return '/assets/support.png'
      } else {
        return user.photo ? `${this.getBaseURL()}/users/photo/${user.photo}?${this.imageVersion}` : `https://avatar.oxro.io/avatar.svg?size=128&background=006675&color=fff&name=${user.name.substring(0, 1)}+${user.last_name.substring(0, 1)}`
      }
    }
    return user.photo ? `${this.getBaseURL()}/users/photo/${user.photo}` : `https://avatar.oxro.io/avatar.svg?size=128&background=006675&color=fff&name=${user.name.substring(0, 1)}+${user.last_name.substring(0, 1)}`
  }

  public async setUserSessionPrice(id: number, price: string) {
    var value = this.http.post(`/users/${id}/price`, { price });
    return await lastValueFrom(value);
  }

  public async getUserAppointments(id: number) {
    var value = this.http.get(`/users/${id}/appointments`);
    return await lastValueFrom(value);
  }

  public async getPackagesAvailability(id: number) {
    var value = this.http.get(`/users/${id}/packages-availability`);
    return await lastValueFrom(value);
  }

  public async getTwilioToken() {
    var value = this.http.get('/users/twilio-token');
    return await lastValueFrom(value);
  }

  public async sendChatMessagePush(message: string, type: any) {
    var value = this.http.post(`/users/${type}/send-chat-message`, message);
    return await lastValueFrom(value);
  }

  public async callTo(receiverId: number) {
    var value = this.http.post('/users/call-to-user', { receiverId });
    return await lastValueFrom(value);
  }

  public async cancelCall(receiverId: number) {
    var value = this.http.post(`/users/cancel-call/${receiverId}`, {});
    return await lastValueFrom(value);
  }

  public async sendEndCall(receiverId: number) {
    var value = this.http.post(`/users/end-call/${receiverId}`, {});
    return await lastValueFrom(value);
  }

  public async sendRejectCall(callerId: number) {
    var value = this.http.post(`/users/reject-call/${callerId}`, {});
    return await lastValueFrom(value);
  }

  public async sendAcceptCall(callerId: number) {
    var value = this.http.post(`/users/accept-call/${callerId}`, {});
    return await lastValueFrom(value);
  }

  public async subscribeToChannel(channel: string) {
    var value = this.http.get(`/users/channel-subscribe/${channel}`);
    return await lastValueFrom(value);
  }

  public async getProfile(id: number) {
    // Return profile http request get using lastValueFrom
    var value = this.http.get(`/users/${id}/profile`);
    return await lastValueFrom(value);
  }

  public async checkSessionTime() {
    var value = this.http.get('/users/check-session-time');
    return await lastValueFrom(value);
  }

  public async requestRecoveryPassword(email: string) {
    var value = this.http.post('/users/password-recovery', { email });
    return await lastValueFrom(value);
  }

  public async cancelAppointment(id: number) {
    var value = this.http.post(`/appointments/${id}/cancel`, '');
    return await lastValueFrom(value);
  }

  public async validateCoupon({ code, packageId }: { code: string, packageId: number }) {
    var value = this.http.post('/payments/use-coupon', { code, packageId });
    return await lastValueFrom(value);
  }

  // Cupones
  public async getCoupon(id: number) {
    var value = this.http.get(`/coupons/${id}`);
    return await lastValueFrom(value);
  }

  // Contenidos
  public async getCategoryContents(categoryID: number) {
    var value = this.http.get(`/content/${categoryID}/category`);
    return await lastValueFrom(value);
  }

  public async getFeelingContents(feelingID: number) {
    var value = this.http.get(`/content/${feelingID}/feeling`);
    return await lastValueFrom(value);
  }

  public async getSubategoryContents(categoryID: number, subcategoryID: number) {
    var value = this.http.get(`/content/${categoryID}/category/${subcategoryID}/subcategory`);
    return await lastValueFrom(value);
  }

  public async getNewestContent() {
    var value = this.http.get(`/content/newContent`);
    return await lastValueFrom(value);
  }

  public async saveContentVisit(visit: any) {
    var value = this.http.post('/content-visit', visit);
    return await lastValueFrom(value);
  }

  public async getLastContents(userID: string) {
    var value = this.http.get(`/content-visit/${userID}/lastContents`);
    return await lastValueFrom(value);
  }

  // CATEGORÍAS

  public async getCategories() {
    var value = this.http.get('/category');
    return await lastValueFrom(value);
  }

  public async getFeelings() {
    var value = this.http.get('/feeling');
    return await lastValueFrom(value);
  }

  public async getSubcategories() {
    var value = this.http.get('/subcategory');
    return await lastValueFrom(value);
  }

  public async getSpecialties() {
    var value = this.http.get('/specialty');
    return await lastValueFrom(value);
  }

  public async getSpecialtyContents(specialtyID: number) {
    var value = this.http.get(`/content/specialty/${specialtyID}`);
    return await lastValueFrom(value);
  }

  // STRIPE METHODS

  public async createSubscription(data: any) {
    var value = this.http.post('/payments/create-subscription', data);
    return await lastValueFrom(value);
  }

  public async getSubscriptionPrices() {
    var value = this.http.get('/payments/prices');
    return await lastValueFrom(value);
  }

  public async getCouponsCode(code: string) {
    var value = this.http.get(`/coupons/code/${code}`);
    return await lastValueFrom(value);
  }
}

