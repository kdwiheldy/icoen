export const useBase = () => {
  const viewMode = useState<'desktop' | 'mobile' | null>('viewMode', () => null);
  return {
    viewMode,
    setViewMode: (mode: 'desktop' | 'mobile') => { viewMode.value = mode; },
  };
};
