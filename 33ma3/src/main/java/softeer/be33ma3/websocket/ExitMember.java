package softeer.be33ma3.websocket;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class ExitMember {
    private String type;
    private Long memberId;
}
