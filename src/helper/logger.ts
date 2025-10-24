export const logger = (load: any, name: string = 'logger') => {
  if (typeof load === 'string') {
    console.log(load);
  } else {
    console.log(name, JSON.stringify(load, null, 3));
  }
};
