const API_PATH = "GuiaCereza";

const URL = `http://www.tecnocedicore.com/APIDashboard/`;

// const URL = `http://172.31.27.115/AguaBendita/Dashboard/API/`

const PACKING_PATH = `/api/Packing/DiaProductividad`;

const PICKING_PATH = `/api/Picking/DiaProductividad`;

const RECEPCION_PATH = `/api/Recepcion/DiaProductividad`;

const RESUMEN_OPERACION_PATH = `/api/OtherProcesses/ResumenOperacion`;

export const PACKING_URL = `${URL}${API_PATH}${PACKING_PATH}`;

export const PICKING_URL = `${URL}${API_PATH}${PICKING_PATH}`;

export const RECEPCION_URL = `${URL}${API_PATH}${RECEPCION_PATH}`;

export const RESUMEN_OPERACION_URL = `${URL}${API_PATH}${RESUMEN_OPERACION_PATH}`;
