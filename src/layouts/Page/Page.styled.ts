import styled from "@emotion/styled";
import { LAYOUT_WIDTH, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  --gap: ${VARS.size.gold};

  position: relative;
  display: flex;
  justify-content: center;

  .static {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(${NOT_FONT_SIZE.l} * 3);
    margin: 0 calc(var(--gap) * 4 + ${VARS.component.button.s.size});
    padding-top: calc(${NOT_FONT_SIZE.l} * 3);
    max-width: ${LAYOUT_WIDTH};
    min-height: 100vh;

    transition:
      margin ${TIME.m} ease,
      padding ${TIME.m} ease;

    @media (max-width: ${VARS.screen.width.l}) {
      margin: 0;
      padding-top: calc(${NOT_FONT_SIZE.l} * 2);

      main {
        padding: 0 calc(var(--gap) * 2);
      }
    }

    @media (width < ${VARS.screen.width.s}) {
      main {
        padding: 0 var(--gap);
      }
    }

    main {
      display: flex;
      flex-direction: column;
      gap: calc(${NOT_FONT_SIZE.l} * 3);

      transition: padding ${TIME.m} ease;

      > * {
        :nth-of-type(1) {
          scroll-margin-top: ${NOT_FONT_SIZE["6xl"]};
        }

        :not(:nth-of-type(1)) {
          scroll-margin-top: var(--gap);
        }
      }
    }
  }
`;
