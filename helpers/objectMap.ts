export function objectMap<TSource, TDestination>(source: TSource, destType: new () => TDestination): TDestination {
    if (source == null) {
        return null;
    }

    const destination = new destType();

    Object.keys(source).forEach((key) => {
        if (key in destination) {
            (destination as any)[key] = (source as any)[key];
        }
    });
    
    return destination;
}
