import { FC, forwardRef } from "react";
import { Column } from "../Layout";

import * as ICONS from "@mui/icons-material";
import * as COMPONENT from "./components";
import { useMemo } from "react";

const RenderComponent = ({ items, pid }) => {
    if (!items?.length)
        return <></>;

    return items.map((item, i) => {
        const id = pid ? `${pid}-${i}` : `${i}`;

        if (!item.component)
            return <></>;

        const { [item.component]: Component } = COMPONENT;

        if (item.icon) {
            const { [item.icon]: Icon } = ICONS;

            return <Component key={`ek-${id}`} {...item.properties} id={id}><Icon /></Component>
        }

        if (!!item.text)
            return <Component key={`ek-${id}`} {...item.properties} id={id}>{item.text}</Component>

        if (!item.items)
            return <Component key={`ek-${id}`} {...item.properties} id={id} />

        return (
            <Component key={`ek-${id}`} {...item.properties} id={id}>
                <RenderComponent items={item.items} pid={id} />
            </Component>
        )
    });
}

const Renderer = forwardRef(({ data, pid, onClick, production }, ref) => {
    const width = useMemo(() => data?.device?.width || 380, [data]);
    const height = useMemo(() => data?.device?.height || 844, [data]);

    if (production)
        return (
            <Column flex="1" ref={ref} bgcolor='white' overflow='hidden' onClick={onClick}>
                <RenderComponent items={data?.items} pid={pid} />
            </Column>
        )

    return (
        <Column sx={{ borderRadius: 8 }} ref={ref} position='absolute' left={-(width / 2)} top={-(height / 2)} width={width} height={height} bgcolor='white' overflow='hidden' onClick={onClick}>
            <RenderComponent items={data?.items} pid={pid} />
        </Column>
    );
});

export default Renderer;