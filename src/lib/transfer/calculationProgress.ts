export function calulateProgress(transferredBytes: number, totalBytes: number): number {
    if (totalBytes === 0) {
        return 0;
    }
    return (transferredBytes/totalBytes) * 100;
  }