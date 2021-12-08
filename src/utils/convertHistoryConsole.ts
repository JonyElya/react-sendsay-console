const convertHistoryConsole = (history: IHistory[], item: IHistory): ResponseConsoleData[] => {
  if (history.length === 15) {
    history = history.slice(0, -1);
  }
  return Array.from(new Set([item, ...history]));
};

export default convertHistoryConsole;
