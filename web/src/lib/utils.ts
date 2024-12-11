import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import _ from 'lodash';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { toast } from '@zerodevx/svelte-toast';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	const scaleConversion = (
		valueA: number,
		scaleA: [number, number],
		scaleB: [number, number]
	) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (
		style: Record<string, number | string | undefined>
	): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export interface Patient {
  first_name: string;
  last_name: string;
  father_name: string;
  sex: string;
  birth_date: Date;
  insurance: string;
  country: string;
  city: string;
  street: string;
  building: string;
  url: string;
}

export const patients_example: Patient[] = [
  {
    first_name: 'DICOM',
    last_name: 'CBCT.zip',
    father_name: '',
    sex: '',
    birth_date: new Date(),
    insurance: '',
    country: '',
    city: '',
    street: '',
    building: '',
    url: './DICOM/CBCT.zip'
  },
  {
    first_name: 'DICOM',
    last_name: 'Head_anon.zip',
    father_name: '',
    sex: '',
    birth_date: new Date(),
    insurance: '',
    country: '',
    city: '',
    street: '',
    building: '',
    url: './DICOM/Head_anon.zip'
  },
  {
    first_name: 'DICOM',
    last_name: 'Petrov.zip',
    father_name: '',
    sex: '',
    birth_date: new Date(),
    insurance: '',
    country: '',
    city: '',
    street: '',
    building: '',
    url: './DICOM/Petrov.zip'
  },
  {
    first_name: 'DICOM',
    last_name: 'phantom.dcm.zip',
    father_name: '',
    sex: '',
    birth_date: new Date(),
    insurance: '',
    country: '',
    city: '',
    street: '',
    building: '',
    url: './DICOM/phantom.dcm.zip'
  },
  {
    first_name: 'Peter',
    last_name: 'Susser',
    father_name: 'Abobovich',
    sex: 'male',
    birth_date: new Date(),
    insurance: 'test',
    country: 'Russia ',
    city: 'Saint Petersburg',
    street: 'Nevsky Avenue',
    building: '114',
    url: './ct.dcm'
  }
];
export const makeId = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export interface PatientInfo {
  id?: number;
  PatientName: string;
  PatientID: string;
  PatientBirthDate: string;
  PatientSex: 'M' | 'F' | ''; // no apache attack helicopter, sorry
  PatientSize: number; // im m
  PatientWeight: number; // in kg
}

export const defaultPatient = (): PatientInfo =>
  structuredClone({
    PatientName: '',
    PatientID: '',
    PatientBirthDate: '',
    PatientSex: '',
    PatientSize: 0,
    PatientWeight: 0
  });
type Tags = Record<`${number},${number}`, { Name: string; Type: string; Value: string }>;

export interface EOISStudy {
  MainDicomTags: Tags;
  ParentPatient: string;
  PatientMainDicomTags: Tags;
  RequestedTags: Tags;
  Series: string[];
  Type: 'Study';
}
export type EOISStudyResponse = EOISStudy[];

export type EOISSeriesResponse = {
  MainDicomTags: {
    Manufacturer: string;
    Modality: string;
    SeriesInstanceUID: string;
    SeriesNumber: string;
  };
  ParentStudy: string;
  Instances: string[];
  Type: 'Series';
};

export type Settings = {
  // shows/hided text annotations
  annotations: boolean;
  // shows/hided measurements
  measurements: boolean;
  // shows/hided patient data
  patient_data: boolean;
  // shows/hided dicom tags
  dicom_tags: boolean;

  axis: boolean;
  sync: boolean;

  // lmb binding readonly
  lmb: string;
  // rmb binding readonly
  rmb: string;
  // mmb binding readonly
  mmb: string;
};

export const parseTags = (tags: Tags) =>
  Object.fromEntries(
    Object.entries(tags).map(([_tag, tag_data]) => [tag_data.Name, tag_data.Value])
  );

export const parsePatients = (data: EOISStudyResponse) => {
  const parsed = parseAllPatients(data);
  const patient = parsed[0];
  if (!patient) throw new Error('patient not found');

  return patient;
};

export const parseAllPatients = (data: EOISStudyResponse) => {
  const parsed = data.map((data) => _.merge(defaultPatient(), parseTags(data.RequestedTags)));

  return parsed;
};

export type Role = string;
export interface User {
  userId: number;
  login: string;
  roles: Role[];
}

export const checkRoles = (user: User, requiredRoles: Role[]) => {
  return !requiredRoles.length || (requiredRoles || []).some((role) => user?.roles?.includes(role));
};

export const roles = writable<Role[]>([]);
export const user = writable<User>();
export const header = writable<boolean>(true);

export const RequestedTags = [
  '0010,0010',
  '0010,0020',
  '0010,0030',
  '0010,0040',
  '0010,1020',
  '0010,1030'
];

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export function download(filename: string, text: string) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function downloadBin(filename: string, bin: ArrayBuffer) {
  const element = document.createElement('a');
  element.setAttribute('download', filename);

  const blob = new Blob([bin]);
  const url = window.URL.createObjectURL(blob);
  element.style.display = 'none';
  element.setAttribute('href', url);

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function reloadPage() {
  const thisPage = window.location.pathname;

  console.log('goto ' + thisPage);

  goto('/').then(() => goto(thisPage));
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

/**
 * Wraps async function and shows toast notification based on result
 * @example
 * ```
 * wrap(async () => {
 *   await action_groups_api.deleteActionGroup(id);
 *   await refresh_action_groups();
 *   return `Группа действий с ID '${id}' успешно удалена'`;
 * });
 * ```
 * @param f async function that returns optional string, if success, or throws error if fail
 */
export const wrap = async (f: () => Promise<string | null | undefined | void>) => {
  try {
    const res = await f();
    if (res != null) {
      toast.push(res, {
        theme: {
          '--toastBackground': '#55aa55',
          '--toastColor': 'white',
          '--toastBarBackground': 'white'
        }
      });
    }
  } catch (e: any) {
    console.error(e);
    toast.push(
      e.response?.data?.detail?.[0]?.msg || e.response?.data?.message || e.message || 'Ошибка',
      {
        theme: {
          '--toastBackground': '#ff5555',
          '--toastColor': 'white',
          '--toastBarBackground': 'white'
        }
      }
    );
  }
};

export const logout = async () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user_data');
  await goto('/');
  window.location.reload();
};
