// src/types/frontend-types.ts

// ============================================================================
// ENUMS
// ============================================================================

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  ORGANIZER = 'organizer',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export enum PaymentMethod {
  CARD = 'CARD',
  PAYPAL = 'PAYPAL',
  MPESA = 'MPESA',
}

export enum TicketStatus {
  VALID = 'valid',
  USED = 'used',
  CANCELLED = 'cancelled',
}

// ============================================================================
// BASE ENTITY INTERFACES
// ============================================================================

export interface BaseEntity {
  id: number
}

export interface TimestampedEntity extends BaseEntity {
  created_at: string
  updated_at?: string
}

// ============================================================================
// CORE ENTITY TYPES
// ============================================================================

export interface User extends TimestampedEntity {
  name: string
  email: string
  phone: string
  role: UserRole
  otp?: string
  // Relations (optional for API responses)
  events?: Array<Event>
  feedbacks?: Array<Feedback>
  eventRegistration?: Array<EventRegistration>
  tickets?: Array<Ticket>
}

export interface TUser {
  id: number
  name: string
  email: string
  phone: string
  role: UserRole
  created_at: string
  updated_at?: string
}

export interface Event extends BaseEntity {
  event_name: string
  event_date: string
  event_location: string
  event_description: string
  // Relations (optional for API responses)
  user?: User
  feedbacks?: Array<Feedback>
  tickets?: Array<Ticket>
  registration?: Array<EventRegistration>
}

export interface EventRegistration extends BaseEntity {
  registrationDate: string
  paymentStatus: PaymentStatus
  amount: number
  // Relations (optional for API responses)
  user?: User
  event?: Event
  ticket?: Array<Ticket>
  payment?: Payment
}

export interface Ticket extends BaseEntity {
  ticketNumber: string
  paymentId?: number
  eventRegistrationId?: number
  status: TicketStatus
  issuedAt: string
  usedAt?: string
  // Relations (optional for API responses)
  event?: Event
  user?: User
  payment?: Payment
  registeredEvent?: EventRegistration
}

export interface Payment extends BaseEntity {
  amount: number
  payment_date: string
  transaction_id: string
  paymentstatus: PaymentStatus
  paymentMethod?: PaymentMethod
  // Relations (optional for API responses)
  registeredEvent?: EventRegistration
}

export interface Feedback extends BaseEntity {
  rating: number
  comments: string
  created_at: string
  // Relations (optional for API responses)
  event?: Event
  user?: User
}

// ============================================================================
// API REQUEST TYPES (DTOs)
// ============================================================================

// User DTOs
export interface CreateUserDto {
  name: string
  email: string
  password: string
  phone: string
  role?: UserRole
}

export interface UpdateUserDto {
  name?: string
  email?: string
  phone?: string
  role?: UserRole
}

export interface LoginDto {
  email: string
  password: string
}

export interface ResetPasswordRequestDto {
  email: string
}

export interface ResetPasswordDto {
  token: string
  newPassword: string
}

// Event DTOs
export interface CreateEventDto {
  event_name: string
  event_date: string
  event_location: string
  event_description: string
}

export interface UpdateEventDto {
  event_name?: string
  event_date?: string
  event_location?: string
  event_description?: string
}

// Event Registration DTOs
export interface CreateEventRegistrationDto {
  eventId: number
  amount: number
}

export interface UpdateEventRegistrationDto {
  paymentStatus?: PaymentStatus
  amount?: number
}

// Ticket DTOs
export interface CreateTicketDto {
  eventId: number
  userId: number
  eventRegistrationId: number
}

export interface UpdateTicketDto {
  status?: TicketStatus
}

// Payment DTOs
export interface CreatePaymentDto {
  eventRegistrationId: number
  amount: number
  paymentMethod: PaymentMethod
}

export interface UpdatePaymentDto {
  paymentstatus?: PaymentStatus
  transaction_id?: string
}

// Feedback DTOs
export interface CreateFeedbackDto {
  eventId: number
  rating: number
  comments: string
}

export interface UpdateFeedbackDto {
  rating?: number
  comments?: string
}

// ============================================================================
// PAGINATION TYPES
// ============================================================================

export interface PaginationQuery {
  page?: number
  limit?: number
}

export interface PaginationMeta {
  itemsPerPage: number
  totalItems: number
  totalPages: number
  currentPage: number
}

export interface PaginationLinks {
  first: string
  last: string
  previous: string
  current: string
  next: string
}

export interface PaginatedResponse<T> {
  data: Array<T>
  meta: PaginationMeta
  links: PaginationLinks
}

// ============================================================================
// PAGINATED ENTITY RESPONSES
// ============================================================================

export type PaginatedUsers = PaginatedResponse<User>
export type PaginatedEvents = PaginatedResponse<Event>
export type PaginatedEventRegistrations = PaginatedResponse<EventRegistration>
export type PaginatedTickets = PaginatedResponse<Ticket>
export type PaginatedPayments = PaginatedResponse<Payment>
export type PaginatedFeedbacks = PaginatedResponse<Feedback>

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
  meta: {
    itemsPerPage: number
    totalItems: number
    totalPages: number
    currentPage: number
  }
  links: {
    first: string
    last: string
    previous: string
    current: string
    next: string
  }
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
  user: User
}

// Single entity responses
export type UserResponse = ApiResponse<User>
export type EventResponse = ApiResponse<Event>
export type EventRegistrationResponse = ApiResponse<EventRegistration>
export type TicketResponse = ApiResponse<Ticket>
export type PaymentResponse = ApiResponse<Payment>
export type FeedbackResponse = ApiResponse<Feedback>

// Array responses
export type UsersResponse = ApiResponse<Array<User>>
export type EventsResponse = ApiResponse<Array<Event>>
export type EventRegistrationsResponse = ApiResponse<Array<EventRegistration>>
export type TicketsResponse = ApiResponse<Array<Ticket>>
export type PaymentsResponse = ApiResponse<Array<Payment>>
export type FeedbacksResponse = ApiResponse<Array<Feedback>>

// Paginated responses
export type PaginatedUsersResponse = ApiResponse<PaginatedUsers>
export type PaginatedEventsResponse = ApiResponse<PaginatedEvents>
export type PaginatedEventRegistrationsResponse =
  ApiResponse<PaginatedEventRegistrations>
export type PaginatedTicketsResponse = ApiResponse<PaginatedTickets>
export type PaginatedPaymentsResponse = ApiResponse<PaginatedPayments>
export type PaginatedFeedbacksResponse = ApiResponse<PaginatedFeedbacks>

// ============================================================================
// FILTER AND SEARCH TYPES
// ============================================================================

export interface UserFilters extends PaginationQuery {
  role?: UserRole
  search?: string // For searching by name or email
}

export interface EventFilters extends PaginationQuery {
  location?: string
  dateFrom?: string
  dateTo?: string
  search?: string // For searching by name or description
}

export interface EventRegistrationFilters extends PaginationQuery {
  paymentStatus?: PaymentStatus
  eventId?: number
  userId?: number
  dateFrom?: string
  dateTo?: string
}

export interface TicketFilters extends PaginationQuery {
  status?: TicketStatus
  eventId?: number
  userId?: number
  dateFrom?: string
  dateTo?: string
}

export interface PaymentFilters extends PaginationQuery {
  paymentstatus?: PaymentStatus
  paymentMethod?: PaymentMethod
  dateFrom?: string
  dateTo?: string
  amountMin?: number
  amountMax?: number
}

export interface FeedbackFilters extends PaginationQuery {
  eventId?: number
  userId?: number
  ratingMin?: number
  ratingMax?: number
  dateFrom?: string
  dateTo?: string
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

// For forms and validation
export type UserFormData = Omit<CreateUserDto, 'role'> & {
  confirmPassword: string
  role?: UserRole
}

export type EventFormData = CreateEventDto

// For partial updates
export type PartialUser = Partial<User>
export type PartialEvent = Partial<Event>
export type PartialEventRegistration = Partial<EventRegistration>
export type PartialTicket = Partial<Ticket>
export type PartialPayment = Partial<Payment>
export type PartialFeedback = Partial<Feedback>

// For entity selection in dropdowns/forms
export interface SelectOption {
  value: string | number
  label: string
}

export type UserSelectOption = SelectOption
export type EventSelectOption = SelectOption

// ============================================================================
// ANALYTICS AND DASHBOARD TYPES
// ============================================================================

export interface DashboardStats {
  totalUsers: number
  totalEvents: number
  totalRegistrations: number
  totalTickets: number
  totalRevenue: number
  pendingPayments: number
}

export interface EventAnalytics {
  eventId: number
  eventName: string
  totalRegistrations: number
  totalTickets: number
  totalRevenue: number
  averageRating: number
  feedbackCount: number
}

export interface UserAnalytics {
  userId: number
  userName: string
  totalRegistrations: number
  totalTickets: number
  totalSpent: number
  favoriteEventCategories: Array<string>
}

// ============================================================================
// ERROR TYPES
// ============================================================================

export interface ValidationError {
  field: string
  message: string
}

export interface ApiError {
  statusCode: number
  message: string
  error?: string
  details?: Array<ValidationError>
}

// ============================================================================
// SEARCH AND SORTING TYPES
// ============================================================================

export type SortOrder = 'ASC' | 'DESC'

export interface SortOptions {
  field: string
  order: SortOrder
}

export interface SearchQuery extends PaginationQuery {
  search?: string
  sortBy?: string
  sortOrder?: SortOrder
  filters?: Record<string, any>
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================
