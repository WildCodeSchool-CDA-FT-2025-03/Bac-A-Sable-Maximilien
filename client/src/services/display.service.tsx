import { useState } from 'react';
import { DisplayType } from '@/components/ToolsBar/ToolsBar';

const useDisplay = () => {
    const [display, setDisplay] = useState("list" as DisplayType);


    return {display, setDisplay};
}

export default useDisplay;