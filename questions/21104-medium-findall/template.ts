type FindAll<
  T extends string,
  P extends string,
  Offset extends string[] = [],
> = P extends ''
  ? []
  : T extends `${infer L}${P}${infer R}`
    ? [
        [...Offset, ...ToSplitted<L>]['length'],
        ...FindAll<
        `${Join<Tail<ToSplitted<P>>>}${R}`,
        P,
        [
          ...Offset,
          ...ToSplitted<L>,
          ...(ToSplitted<P>['length'] extends 1
            ? ToSplitted<P>
            : Tail<ToSplitted<P>>),
        ]
      >,
      ]
    : []
