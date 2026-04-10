import { useAppSelector } from '../app/hooks';

export const useToast = () => {
  const mainColor = useAppSelector((state) => state.theme.mainColor);

  const showToast = (msg: string) => {
    const toastDiv = document.createElement('div');
    toastDiv.textContent = msg;

    // Styling
    toastDiv.style.position = 'fixed';
    toastDiv.style.bottom = '20px';
    toastDiv.style.right = '20px';
    toastDiv.style.backgroundColor = mainColor;
    toastDiv.style.color = 'white';
    toastDiv.style.padding = '12px 16px';
    toastDiv.style.borderRadius = '8px';
    toastDiv.style.fontSize = '14px';
    toastDiv.style.fontWeight = '500';
    toastDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    toastDiv.style.zIndex = '9999';
    toastDiv.style.maxWidth = '300px';
    toastDiv.style.wordWrap = 'break-word';

    // Append to body
    document.body.appendChild(toastDiv);

    // Remove after 3 seconds
    setTimeout(() => {
      toastDiv.remove();
    }, 3000);
  };

  return { showToast };
};
