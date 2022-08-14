import moment from "moment";

export const createMoment = (): string => moment().format("YYYY-MM-DD HH:mm:ss");