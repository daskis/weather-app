// TabsTag.tsx
import React from 'react';
import styles from './TabsTag.module.scss';

interface Tab {
    title: string;
    value: any;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: number;
    onChange: (value: number) => void;
}

const TabsTag: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
    return (
        <div>
            <div className={styles.tabContainer}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tabButton} ${index === activeTab ? styles.active : ''}`}
                        onClick={() => onChange(tab.value)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabsTag;
