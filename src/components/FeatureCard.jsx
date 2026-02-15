function FeatureCard({ icon, title, desc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        rounded-xl
        p-5
        pb-24
        cursor-pointer
        border
        border-[#276578]
        bg-gradient-to-br
        from-[#f0fafc]
        to-[#f1f7f8]
        transition-all
        duration-200
        hover:-translate-y-1.5
        hover:shadow-[0_12px_28px_rgba(39,101,120,0.18)]
      "
    >
      {/* Icon */}
      <div className="
        w-12
        h-12
        rounded-xl
        flex
        items-center
        justify-center
        text-[28px]
        text-[#153a45]
        mb-4
      ">
        <i className={icon}></i>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-normal mb-2 text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-gray-600">
        {desc}
      </p>

      {/* Arrow */}
      <i className="
        fa-solid fa-arrow-right
        absolute
        bottom-5
        right-5
        text-[25px]
        text-gray-400
        transition-all
        duration-200
        group-hover:translate-x-1.5
        group-hover:text-[#2c3e50]
      "></i>
    </div>
  );
}

export default FeatureCard;
