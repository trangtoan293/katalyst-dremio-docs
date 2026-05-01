package com.dremio.dac.model.diff;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.immutables.value.Value;
import java.util.List;
import java.util.Map;

@Value.Immutable
public interface DataDiffResponse {
  @JsonProperty("hasChanges") boolean getHasChanges();
  @JsonProperty("totalRowsChanged") long getTotalRowsChanged();
  @JsonProperty("sampleRows") List<Map<String, Object>> getSampleRows();
}
