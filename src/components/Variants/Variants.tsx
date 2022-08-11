import { RadioGroup } from "@headlessui/react";
import { VariantProps } from "interfaces/Variants";

function Size({ Variants = [], setVariant, Variant }: VariantProps) {
  return (
    <div>
      <RadioGroup
        className="flex items-center justify-center md:justify-start"
        value={Variant}
        onChange={setVariant}
      >
        <p className="text-center text-lg md:text-3xl">Sizes:</p>
        {Variants.map((Variants) => (
          <RadioGroup.Option
            className="mx-2 md:mx-5 "
            value={Variants}
            key={Variants.id}
          >
            {({ checked }) => (
              <div
                className={
                  checked
                    ? "flex h-14 w-20 md:w-32 flex-col border-2 border-orange-400 duration-100 ease-in hover:bg-orange-400 cursor-pointer justify-center"
                    : "flex h-14 w-20  md:w-32 flex-col border-2  border-black duration-100 ease-in hover:border-orange-400 cursor-pointer justify-center"
                }
              >
                <p className="text-center text-lg md:text-2xl">
                  {Variants.title}
                </p>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}

export default Size;
