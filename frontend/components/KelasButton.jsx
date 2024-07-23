const KelasButton = ({ onClick, isActive }) => {
    return (
        <button 
            onClick={onClick} 
            className={`rounded-md py-1 px-3 ${
                isActive 
                    ? 'bg-basicBlack-10 text-white' 
                    : 'bg-white text-basicBlack-10'
            }`}
        >
            Kelas
        </button>
    );
}

export default KelasButton;