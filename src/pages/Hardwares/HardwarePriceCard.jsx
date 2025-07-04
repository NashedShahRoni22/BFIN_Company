import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function HardwarePriceCard({ product }) {
    // Initialize with the first RAM and storage options instead of null
    const [selectedRam, setSelectedRam] = useState(product?.rams?.[0] || null);
    const [selectedStorage, setSelectedStorage] = useState((product?.ssd || product?.storage)?.[0] || null);
    const [price, setPrice] = useState(0);

    // Calculate price whenever selections change
    useEffect(() => {
        if (selectedRam && selectedStorage && product?.price) {
            const newPrice = product.price(selectedRam.id, selectedStorage.id);
            setPrice(newPrice);
        }
    }, [selectedRam, selectedStorage, product]);

    // Initialize price on component mount
    useEffect(() => {
        if (product?.rams?.[0] && (product?.ssd?.[0] || product?.storage?.[0]) && product?.price) {
            const defaultRamId = product.rams[0].id;
            const defaultStorageId = (product.ssd || product.storage)[0].id;
            const initialPrice = product.price(defaultRamId, defaultStorageId);
            setPrice(initialPrice);
        }
    }, [product]);

    return (
        <div className="flex flex-col justify-between gap-4 rounded border border-gray-200 p-6 shadow">
            <h5 className="text-lg font-bold text-primary">{product?.name}</h5>

            {/* Processor Info */}
            <div className="flex items-center gap-3">
                <img
                    src="https://www.server4you.com/p-xeon.svg"
                    alt="Processor"
                    loading="lazy"
                    className="h-[60px]"
                />
                <div>
                    <p className="text-sm font-medium">{product?.processor?.model}</p>
                    <p className="text-sm border-t">
                        {product?.processor?.core}, {product?.processor?.clock}, {product?.processor?.cache}, {product?.processor?.tdp}
                    </p>
                </div>
            </div>

            {/* Case */}
            <p className="flex items-start gap-2 text-sm">
                <FaCheck className="mt-1 text-primary min-w-[16px]" />
                <span>{product?.case}</span>
            </p>

            {/* Motherboard */}
            <p className="flex items-start gap-2 text-sm">
                <FaCheck className="mt-1 text-primary min-w-[16px]" />
                <span>{product?.board}</span>
            </p>

            {/* Cooler */}
            <p className="flex items-start gap-2 text-sm">
                <FaCheck className="mt-1 text-primary min-w-[16px]" />
                <span>{product?.cooler}</span>
            </p>

            {/* PSU */}
            <p className="flex items-start gap-2 text-sm">
                <FaCheck className="mt-1 text-primary min-w-[16px]" />
                <span>{product?.psu}</span>
            </p>

            {/* RAM Select */}
            {product?.rams?.length > 0 && (
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-primary">RAM</label>
                    <select
                        value={selectedRam?.id || ''}
                        onChange={(e) => {
                            const ram = product.rams.find((r) => r.id === Number(e.target.value));
                            setSelectedRam(ram);
                        }}
                        className="rounded border border-primary px-3 py-1 focus:outline-none"
                    >
                        {product.rams.map((ram) => (
                            <option key={ram.id} value={ram.id}>
                                {ram.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Storage Select */}
            {(product?.ssd || product?.storage) && (
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-primary">Storage</label>
                    <select
                        value={selectedStorage?.id || ''}
                        onChange={(e) => {
                            const storage = (product.ssd || product.storage).find((s) => s.id === Number(e.target.value));
                            setSelectedStorage(storage);
                        }}
                        className="rounded border border-primary px-3 py-1 focus:outline-none"
                    >
                        {(product?.ssd || product?.storage).map((storage) => (
                            <option key={storage.id} value={storage.id}>
                                {storage.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Price Display */}
            <div className="mt-4">
                <p className="text-xl font-bold">Price: ${price}</p>
            </div>
        </div>
    );
}