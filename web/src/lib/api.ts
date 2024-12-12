// src/lib/api.js
import axios, { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'svelte-sonner';
import { writable } from 'svelte/store';
import type {
  Device,
  Patient,
  Study,
  Schedule,
  User,
  Person,
  UserWithRoles,
  DeviceWithComments,
  AuditLog
} from './types';
// import type { Organization, Person, Product, ProductEdit } from './types';
// import ReconnectingWebSocket from 'reconnecting-websocket';
// import { Subject } from 'rxjs';
export const username = writable<string | null>(null);
export const roles = writable<string[]>(['Guest']);

export const getToken = () => localStorage.getItem('jwt_token');
export const getRoles = (): string[] => JSON.parse(localStorage.getItem('roles') ?? '["Guest"]');

function updateUserDetails() {
  const token = getToken();

  if (token) {
    try {
      const decoded = jwtDecode(token) as unknown as { sub: string; role: string };
      console.log(decoded);
      username.set(decoded.sub as string); // Adjust based on token payload structure
      roles.set(getRoles()); // Adjust based on token payload structure
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    username.set(null);
    roles.set(['Guest']);
  }
}
updateUserDetails();

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to save token
export function setUserData(token: string, roles: string[]) {
  localStorage.setItem('jwt_token', token);
  localStorage.setItem('roles', JSON.stringify(roles));
  updateUserDetails();
}

export function clearUserData() {
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('roles');
  updateUserDetails();
}

// Function to login
export async function login(credentials: { username: string; password: string }) {
  const response = await api.post('/auth/signin', credentials);
  const { token, roles } = response.data;
  setUserData(token, roles);
  return token;
}

// Function to register
export async function register(userData: { username: string; password: string; person: Person }) {
  const response = await api.post('/auth/signup', userData);
  return response.data;
}

api.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    toast.error(
      String(
        (error.response?.data as { message: string })?.message ??
          (typeof error.response?.data === 'string' && error.response?.data.length > 0
            ? error.response?.data
            : null) ??
          error.message
      )
    );
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;

// export const products = writable<Product[]>([]);
// export const createProduct = async (product: ProductEdit) => {
//   const { data } = await api.post('/products', product);
//   console.log(data);
// };
// export const updateProduct = async (product: ProductEdit) => {
//   const { data } = await api.put(`/products/${product.id}`, product);
//   console.log(data);
// };

// export const getProducts = async (q = new URLSearchParams()) => {
//   const { data } = await api.get<Product[]>(`/products?${q}`);
//   console.log(data);
//   return data;
// };

// export const deleteProduct = async (id: number | string) => {
//   const { data } = await api.delete(`/products/${id}`);
//   console.log(data);
// };

// getProducts();

// export const organizations = writable<Organization[]>([]);
// export const createOrganization = async (organization: Organization) => {
//   const { data } = await api.post('/organizations', organization);
//   console.log(data);
// };
// export const updateOrganizations = async () => {
//   organizations.set((await api.get('/organizations')).data);
// };
// updateOrganizations();

// export const persons = writable<Person[]>([]);
// export const createPerson = async (person: Person) => {
//   const { data } = await api.post('/persons', person);
//   console.log(data);
// };
// export const updatePersons = async () => {
//   persons.set((await api.get('/persons')).data);
// };
// updatePersons();

// let socket: ReconnectingWebSocket | null = null;

// export const refresh_signal = new Subject<void>();
// export const connectToCommands = () => {
//   if (socket) {
//     socket.close(); // Close the current socket if it's open
//   }

//   socket = new ReconnectingWebSocket(`ws://localhost:1488/lab1-1.0-SNAPSHOT/updates`);

//   socket.onmessage = async function (event) {
//     console.log('Got control command', event.data);

//     setTimeout(async () => {
//       updatePersons();
//       refresh_signal.next();
//       updateOrganizations();
//     }, 100);
//   };

//   socket.onopen = function () {
//     console.log('WebSocket connection established');
//   };

//   socket.onerror = function (event) {
//     console.error('WebSocket error observed:', event);
//   };

//   socket.onclose = function () {
//     console.log('WebSocket connection closed');
//   };
// };
// connectToCommands();
// // export const sendCommand = (command: any) => {
// //   if (!socket) throw new Error('no socket!');
// //   socket.send(JSON.stringify(command));
// // };

// // /updates

// // Reconnect

// export const createPatient = async (product: PatientEdit) => {
//   const { data } = await api.post('/products', product);
//   console.log(data);
// };
// export const updatePatient = async (product: ProductEdit) => {
//   const { data } = await api.put(`/products/${product.id}`, product);
//   console.log(data);
// };

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Response<T> {
  content: T;
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

// patients
export const createPatient = async (patient: Patient) => {
  const { data } = await api.post<Patient>(`/patients`, patient);
  console.log(data);
  return data;
};

export const updatePatient = async (patient: Patient) => {
  const { data } = await api.put<Patient>(`/patients/${patient.id}`, patient);
  console.log(data);
  return data;
};

export const deletePatient = async (id: number) => {
  const { data } = await api.delete<Patient>(`/patients/${id}`);
  console.log(data);
  return data;
};

export const getPatients = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Response<Patient[]>>(`/patients?${q}`);
  console.log(data);
  return data;
};

// devices
export const createDevice = async (Device: Device) => {
  const { data } = await api.post<Device>(`/devices`, Device);
  console.log(data);
  return data;
};

export const updateDevice = async (Device: Device) => {
  const { data } = await api.put<Device>(`/devices/${Device.id}`, Device);
  console.log(data);
  return data;
};

export const deleteDevice = async (id: number) => {
  const { data } = await api.delete<Device>(`/devices/${id}`);
  console.log(data);
  return data;
};

export const getDevices = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Response<DeviceWithComments[]>>(`/devices?${q}`);
  console.log(data);
  return data;
};

// studies
export const createStudy = async (study: Study) => {
  const { data } = await api.post<Study>(`/studies`, study);
  console.log(data);
  return data;
};

export const updateStudy = async (study: Study) => {
  const { data } = await api.put<Study>(`/studies/${study.id}`, study);
  console.log(data);
  return data;
};

export const deleteStudy = async (id: number) => {
  const { data } = await api.delete<Study>(`/studies/${id}`);
  console.log(data);
  return data;
};

export const getStudies = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Response<Study[]>>(`/studies?${q}`);
  console.log(data);
  return data;
};

// schedules
export const createSchedule = async (Schedule: Schedule) => {
  const { data } = await api.post<Schedule>(`/schedules`, Schedule);
  console.log(data);
  return data;
};

export const updateSchedule = async (Schedule: Schedule) => {
  const { data } = await api.put<Schedule>(`/schedules/${Schedule.id}`, Schedule);
  console.log(data);
  return data;
};

export const deleteSchedule = async (id: number) => {
  const { data } = await api.delete<Schedule>(`/schedules/${id}`);
  console.log(data);
  return data;
};

export const getSchedules = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Schedule[]>(`/schedules?${q}`);
  console.log(data);
  return data;
};

// users
export const createUser = async (user: User) => {
  const { data } = await api.post<User>(`/users`, user);
  console.log(data);
  return data;
};

export const updateUser = async (user: User) => {
  const { data } = await api.put<User>(`/users/${user.id}`, user);
  console.log(data);
  return data;
};

export const deleteUser = async (id: number) => {
  const { data } = await api.delete<User>(`/users/${id}`);
  console.log(data);
  return data;
};

export const getUsers = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Response<UserWithRoles[]>>(`/users?${q}`);
  console.log(data);
  return data;
};

export const getLogs = async (q = new URLSearchParams()) => {
  const { data } = await api.get<Response<AuditLog[]>>(`/auditlogs?sort=timestamp,desc&${q}`);
  console.log(data);
  return data;
};
