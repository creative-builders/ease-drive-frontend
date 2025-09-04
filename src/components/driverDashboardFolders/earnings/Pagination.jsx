import { useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";


export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}) {
    // Generate page numbers (with dots for large sets)
    const pages = useMemo(() => {
        let result = [];
        if (totalPages <= 5) {
            result = [...Array(totalPages)].map((_, i) => i + 1);
        } else {
            if (currentPage <= 3) {
                result = [1, 2, 3, "...", totalPages];
            } else if (currentPage >= totalPages - 2) {
                result = [1, "...", totalPages - 2, totalPages - 1, totalPages];
            } else {
                result = [1, "...", currentPage, "...", totalPages];
            }
        }
        return result;
    }, [currentPage, totalPages]);

    return (
        <div className="flex items-center lg:justify-between justify-center gap-16 lg:mt-4 mb-8">
            {/* Page selector */}
            <div className="flex items-center lg:gap-2 gap-1">
                <span className="lg:text-[14px] text-[8px] text-gray-600">Page</span>
                <div className="relative inline-block">
                    <select
                        value={currentPage}
                        onChange={(e) => onPageChange(Number(e.target.value))}
                        className="px-2 py-1 pr-6 rounded-md border lg:text-[14px] text-[8px] appearance-none"
                    >
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>

                    <BiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-700" />
                </div>
                <span className="ml-2 lg:text-[14px] text-[8px] text-gray-600">of {totalPages}</span>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center lg:gap-2 gap-1 lg:text-[14px] text-[8px]">
                <button
                    className="px-2 py-1 rounded-md border bg-white disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(1)}
                >
                    «
                </button>
                <button
                    className="px-2 py-1 rounded-md border bg-white disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    ‹
                </button>

                {pages.map((p, i) =>
                    p === "..." ? (
                        <span key={i} className="px-2">
                            ...
                        </span>
                    ) : (
                        <button
                            key={p}
                            onClick={() => onPageChange(p)}
                            className={`px-3 py-1 rounded-md border ${p === currentPage
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                        >
                            {p}
                        </button>
                    )
                )}

                <button
                    className="px-2 py-1 rounded-md border bg-white disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    ›
                </button>
                <button
                    className="px-2 py-1 rounded-md border bg-white disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(totalPages)}
                >
                    »
                </button>
            </div>
        </div>
    );
}
