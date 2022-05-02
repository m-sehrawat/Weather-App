export const celsius = (x) => (x - 273).toFixed(2);

export const myToast = (toast, title, status, description) => toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
})
